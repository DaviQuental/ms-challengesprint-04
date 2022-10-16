import styled from 'styled-components';

export const AddProductStyles = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
`;

export const FormStyles = styled.form`
    display: flex;
    flex-direction: column;
    background-color: #15172b;
    border-radius: 20px;
    box-sizing: border-box;
    height: 400px;
    padding: 20px;
    width: 500px;
    margin-top: 50px;
`;

export const InputStyles = styled.input`
    background-color: #303245;
    border-radius: 12px;
    border: 0;
    box-sizing: border-box;
    color: #eee;
    font-size: 18px;
    height: 40px;
    margin-bottom: 15px;
    outline: 0;
    padding: 4px 20px 0;
    width: 100%;

    ::placeholder {
        color: gray;
    }
`;

export const SelectStyles = styled.select<{selectedValue: string | undefined}>`
    background-color: #303245;
    border-radius: 12px;
    border: 0;
    box-sizing: border-box;
    font-size: 18px;
    height: 40px;
    margin-bottom: 15px;
    outline: 0;
    padding: 4px 20px 0;
    width: 100%;

    color: ${({ selectedValue }) => selectedValue === 'AC' ? 'gray' : '#eee'};

    option {
        color: gray;
    }
`;

export const ButtonStyles = styled.button`
  background-color: #009879;
  border-radius: 12px;
  border: 0;
  box-sizing: border-box;
  color: #eee;
  cursor: pointer;
  font-size: 18px;
  height: 50px;
  margin-top: 38px;
  // outline: 0;
  text-align: center;
  width: 100%;
`;
