import React, { memo, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setWaterDrunkData, resetWaterDrunkData } from "store/userData/actions";
import { AppState } from "types/AppState";
import { isToday, parseISO } from "date-fns";
import WaterStatisticsComponent from "./WaterStatistics.component";

const WaterStatisticsContainer = memo(() => {
  const [waterEntered, enterWaterUnits] = useState("");
  const dispatch = useDispatch();
  const waterDrunk: number = useSelector((state: AppState) => state.userData.waterDrunk);
  const logsDate: string = useSelector((state: AppState) => state.userData.date);

  const setWaterData = () => {
    dispatch(setWaterDrunkData({ waterDrunk: Number(waterEntered), date: Date.now().toString() }));
  };

  // I do not store archived data (for now ( ͡~ ͜ʖ ͡°))
  if (!isToday(parseISO(logsDate))) {
    dispatch(resetWaterDrunkData());
  }

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
