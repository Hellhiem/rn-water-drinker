import React, { memo, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setWaterDrunkData, resetWaterDrunkData } from "store/userData/actions";
import { AppState } from "types/AppState";
import { isToday } from "date-fns";
import WaterStatisticsComponent from "./WaterStatistics.component";

const WaterStatisticsContainer = memo(() => {
  const [waterEntered, enterWaterUnits] = useState("");
  const dispatch = useDispatch();
  const waterDrunk: number = useSelector((state: AppState) => state.userData.waterDrunk);
  const logsDate: number = useSelector((state: AppState) => state.userData.date);

  const setWaterData = () => {
    dispatch(setWaterDrunkData({ waterDrunk: waterDrunk + Number(waterEntered), date: Date.now() }));
  };

  useEffect(() => {
    if (!isToday(logsDate)) {
      dispatch(resetWaterDrunkData());
    }
  }, [logsDate]);

  return (
    <WaterStatisticsComponent
      waterEntered={waterEntered}
      waterDrunk={waterDrunk}
      enterWaterUnits={enterWaterUnits}
      submitWaterData={setWaterData}
    />
  );
});

export default WaterStatisticsContainer;
