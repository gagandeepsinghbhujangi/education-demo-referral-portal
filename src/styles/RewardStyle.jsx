import { createGlobalStyle } from "styled-components";

export const RewardStyle = createGlobalStyle`
.rewardWrapper{
    display: flex;
    justify-content: center;
  }
  .reward-points{
    font-size: 18px;
    font-family: ${({ theme }) => theme.font1};
    font-weight: 600;
  }
  .rewardIcon{
    height: 30px;
    width: 30px;
  }
  span.count{
    color: ${({ theme }) => theme.colors.primary};
    font-family: ${({ theme }) => theme.font2};
    padding-left: 5px;
    font-size: 18px;
    font-weight: 600;
  }
  span.reward-points{
    color: #555555;
    padding-left: 5px;
  }
`;
