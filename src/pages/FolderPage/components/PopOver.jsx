import styled from 'styled-components';
import { LINK_DELETE } from '../../../constants/modalConstants';
import { useContext } from 'react';
import { ModalContext } from '../FolderPage';
function PopOver({ id, url }) {
  const { handleDeleteModalOpen, handleAddModalOpen } =
    useContext(ModalContext);
  const handleLinkDeleteModalOpen = (e) => {
    e.preventDefault();
    const purpose = {
      purpose: LINK_DELETE,
      id: id,
      name: url,
    };
    handleDeleteModalOpen(purpose);
  };

  const handleLinkAddModalOpen = (e) => {
    e.preventDefault();
    handleAddModalOpen(url);
  };

  return (
    <PopOverContainer>
      <Button onClick={handleLinkDeleteModalOpen}>삭제하기</Button>
      <Button onClick={handleLinkAddModalOpen}>폴더에 추가</Button>
    </PopOverContainer>
  );
}

const PopOverContainer = styled.div`
  width: 100px;
  height: 64px;
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  background-color: white;
  z-index: 10;
  position: absolute;
  top: 20px;
  left: 271px;
`;
const Button = styled.button`
  display: flex;
  padding: 7px 12px;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
  align-self: stretch;
  color: var(--gray-light-gray-100, #333236);
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  border: none;
  background-color: transparent;
  &:hover {
    color: var(--Linkbrary-primary-color, #6d6afe);
    background: var(--Linkbrary-gray10, #e7effb);
  }
`;
export default PopOver;
