import { useState } from 'react';
import styles from './styles.module.css';
import notCompletedImg from '../../assets/task.png';
import completedImg from '../../assets/taskCompleted.png';
import Modal from '../modal/Modal';

const Card = ({
  title,
  subTitle,
  text,
  isCompleted,
  updateTaskHandler,
  id,
}: {
  title: string;
  subTitle: string;
  text: string;
  isCompleted: boolean;
  id: string;
  updateTaskHandler: Function;
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const openModalHandler = () => {
    setModalVisible(true);
  };

  const closeModalHander = () => {
    setModalVisible(false);
  };

  const onChangeTaskStatusHandler = () => {
    setModalVisible(false);
    updateTaskHandler(id, !isCompleted);
  };

  return (
    <div className={styles.card} onClickCapture={openModalHandler}>
      <div className={styles.container}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.text}>{text}</p>
        <img src={isCompleted ? completedImg : notCompletedImg} className={styles.icon} />
        <h3 className={styles.subTitle}>{subTitle}</h3>
      </div>
      <Modal
        isVisible={modalVisible}
        closeModalHandler={closeModalHander}
        onChangeTaskStatusHandler={onChangeTaskStatusHandler}
      />
    </div>
  );
};

export default Card;
