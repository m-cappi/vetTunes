import React, {useState} from 'react';
import {View} from 'react-native';
import {ListItem, Icon} from 'react-native-elements';
import {map} from 'lodash';

import EmailChangeForm from './EmailChangeForm';
import NameChangeForm from './NameChangeForm';
import PasswordChangeForm from './PasswordChangeForm';
import Modal from '../Modal';

const AccountOptions = ({userInfo, toastRef, setReloadUser}) => {
  const {email, displayName} = userInfo;
  const [showModal, setShowModal] = useState(false);
  const [renderComponent, setRenderComponent] = useState(null);

  const selectedComponent = key => {
    switch (key) {
      case 'displayName':
        setRenderComponent(
          <NameChangeForm
            displayName={displayName}
            setShowModal={setShowModal}
            setReloadUser={setReloadUser}
            toastRef={toastRef}
          />,
        );
        setShowModal(true);
        break;

      case 'email':
        setRenderComponent(
          <EmailChangeForm
            email={email}
            setShowModal={setShowModal}
            setReloadUser={setReloadUser}
            toastRef={toastRef}
          />,
        );
        setShowModal(true);
        break;

      case 'password':
        setRenderComponent(
          <PasswordChangeForm
            setShowModal={setShowModal}
            toastRef={toastRef}
          />,
        );

        setShowModal(true);
        break;

      default:
        setRenderComponent(null);
        setShowModal(false);
        break;
    }
  };

  const menuOptions = generateOptions(selectedComponent);

  return (
    <View>
      {map(menuOptions, (menu, index) => (
        <ListItem key={index} bottomDivider onPress={menu.onPress}>
          <Icon
            type={menu.iconType}
            name={menu.iconNameLeft}
            color={menu.iconColorLeft}
          />
          <ListItem.Content>
            <ListItem.Title>{menu.title}</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
      ))}
      {renderComponent && (
        <Modal isVisible={showModal} setIsVisible={setShowModal}>
          {renderComponent}
        </Modal>
      )}
    </View>
  );
};

const generateOptions = callback => {
  return [
    {
      title: 'Change user name',
      iconType: 'material-community',
      iconNameLeft: 'account-circle',
      iconColorLeft: '#ccc',
      iconColorRight: '#ccc',
      iconNameRight: 'chevron-right',
      onPress: () => callback('displayName'),
    },
    {
      title: 'Change email',
      iconType: 'material-community',
      iconNameLeft: 'at',
      iconColorLeft: '#ccc',
      iconColorRight: '#ccc',
      iconNameRight: 'chevron-right',
      onPress: () => callback('email'),
    },
    {
      title: 'Change password',
      iconType: 'material-community',
      iconNameLeft: 'lock-reset',
      iconColorLeft: '#ccc',
      iconColorRight: '#ccc',
      iconNameRight: 'chevron-right',
      onPress: () => callback('password'),
    },
  ];
};

export default AccountOptions;
