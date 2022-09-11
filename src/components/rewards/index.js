import { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";
import { getLeadIdFromCookie } from "../../authentication/utility";
import RewardsService from "../../services/RewardsService";
import { RewardStyle } from "../../styles/RewardStyle";

const Rewards = ({ pointLbl, rewardIcon }) => {
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(null);
  useEffect(() => {
    getRewards();
  }, []);

  const getRewards = () => {
    setLoading(true);
    const rewardsService = new RewardsService();
    const leadId = getLeadIdFromCookie();
    rewardsService.getRewards(leadId, (count) => {
      setCount(count);
      setLoading(false);
    });
  };

  return (
    <>
      <RewardStyle />
      <img src={rewardIcon} alt='pic' className='rewardIcon' />
      <span className='rewardSize count'>
        {loading ? <ClipLoader size={20} /> : count}
      </span>
      <span className='reward-points'>{pointLbl}</span>
    </>
  );
};

export default Rewards;
