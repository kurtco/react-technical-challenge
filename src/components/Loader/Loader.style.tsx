import styled from "styled-components";

export const LoadingMessageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 16px;
  marging: 24px;
  background-color: #f2f2f2; 
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;
export const LoadingIcon = styled.div`
    width: 40px;
    height: 40px;
    border: 4px solid #007aff;
    border-radius: 50%;
    margin-bottom: 12px;
`;


export const LoadingMessage = styled.p`
  font-size: 16px;
  color: #333; 
`;
