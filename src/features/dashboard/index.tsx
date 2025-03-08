import { ContainerGridLayout } from "@/components/layouts/container-grid-layout";
import { ItemGridLayout } from "@/components/layouts/item-grid-layout";
import { Box } from "@mui/material";
import { BodyText } from "@/components/text/body-text";
import { CommonCard } from "@/components/cards/common-card";
import { CommonButton } from "@/components/buttons/common-button";
import { ActivityTracker } from "./user-dashboard/activity-tracker";
import { HeatMap } from "./user-dashboard/heat-map";
import { SwitchField } from "@/components/input-fields/switch-field";

export const DashboardFeature = () => {
  return (
    <>
      <Box>
        <SwitchField />
      </Box>
      <ContainerGridLayout>
        <ItemGridLayout lg={6}>
          <Box sx={{ height: "100%" }}>
            <Box>
              <ActivityTracker />
            </Box>
            <Box sx={{ my: 2 }}></Box>
          </Box>
        </ItemGridLayout>
        <ItemGridLayout lg={6}>
          <Box sx={{ height: "100%" }}>
            <HeatMap />
          </Box>
        </ItemGridLayout>
      </ContainerGridLayout>
    </>
  );
};
