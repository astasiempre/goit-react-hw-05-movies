import styled from 'styled-components';

export const StyledAppContainer = styled.div`

    header {
        display: flex;
        align-items: center;
        padding: 20px;
        box-shadow: 0px 8px 3px 0px rgba(140,130,135,1);
margin-bottom: 20px;
    
    }

.header-link {
    color: black;
    margin-right: 20px;
    text-decoration: none;

    &.active {
        color: red;
        }
        &:hover {text-decoration: underline;}
}`