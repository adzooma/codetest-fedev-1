import React, { useState, useContext, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { firestore, firestoreTimestamp } from '../firebase';

import AppConfigContext from '../contexts/AppConfigContext';
import UserSessionContext from '../contexts/UserSessionContext';

import LayoutPageHeader from '../layouts/PageHeader';
import LayoutSection from '../layouts/Section';

import TaskStatus from '../components/common/TaskStatus';
import ProgressBar from '../components/common/ProgressBar';
import SaveForm from '../components/SaveForm';

const SaveTeamPage = () => {

  const appConfig = useContext(AppConfigContext);
  const userSession = useContext(UserSessionContext);

  const [saveStatus, setSaveStatus] = useState(0);
  const [userDatabaseRef, setUserDatabaseRef] = userSession.dbRef;
  const [userName, setUserName] = userSession.userName;
  const [userChecklist, setUserChecklist] = userSession.checklist;
  const [userDataString, setUserDataString] = userSession.dataString;
  const taskCompleteCriteria = () => [...userSession.checklist][0][2] === true;
  const uniqueID = (new Date().getTime()).toString();

  let saveData = {
    formation: {...userSession.formation[0]},
    players:   [...userSession.players[0]],
    userName:  (userName) ? userName : null,
    date:      firestoreTimestamp()
  };

  const previousSave  = (userDatabaseRef !== null);
  const noChanges     = (userDataString === (JSON.stringify(saveData.formation) + JSON.stringify(saveData.players)));


  useEffect(() => {
    const updatedChecklist = [...userChecklist];
    if(previousSave && !noChanges) {
      updatedChecklist[2] = false;
    }
    if(previousSave && noChanges) {
      updatedChecklist[2] = true;
    }
    setUserChecklist(updatedChecklist);
  // eslint-disable-next-line
  }, []);


  const handleSaveSuccess = () => {
    setSaveStatus(1);

    if(userDatabaseRef === false) {
      setUserDatabaseRef(uniqueID);
    }
    setUserName(saveData.userName);

    const updatedChecklist = [...userChecklist];
    updatedChecklist[2] = true;
    setUserChecklist(updatedChecklist);

    setUserDataString(JSON.stringify(saveData.formation) + JSON.stringify(saveData.players));
  };


  const handleSaveError = () => {
    setSaveStatus(-1);
  };


  const saveUserTeam = (addedData) => {
    saveData = (!addedData) ? saveData : {...saveData, ...addedData};
    saveData = {...saveData}
    let docID = (userDatabaseRef || uniqueID)
    firestore.collection('teams').doc(docID).set(saveData).then(handleSaveSuccess).catch(handleSaveError);
  };


  return (
    <React.Fragment>

      {userSession.checklist[0][1] === false &&
        <Redirect to="/" />
      }

      <LayoutPageHeader>
        <TaskStatus tasks={appConfig.tasks} active="3" completeCriteria={taskCompleteCriteria} />
        <ProgressBar steps={appConfig.progressBarSteps} active="3" />
      </LayoutPageHeader>

      <LayoutSection altColourFirst="true">
        <SaveForm
          defaultValue={userName}
          saveFn={saveUserTeam}
          saveStatus={saveStatus}
          updateMode={(previousSave && !noChanges)}
          formCompleted={(previousSave && noChanges)}
        />
      </LayoutSection>

    </React.Fragment>
  );
};

export default SaveTeamPage;
