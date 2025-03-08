import { Box } from "@mui/material";
import { ActivityCardPropsI } from "../cards.interface";
import { LogInfo } from "@/components/data-displays/log-info";
import { BodyText } from "@/components/text/body-text";
import { formatDateTime } from "@/libs/date-time";

export const ActivityCard = (props: ActivityCardPropsI) => {
  const {
    activityType,
    activityInfo,
    activityDate,
    dateFormat,
    hasBorderBottom,
    paddingX = 2,
  } = props;

  return (
    <Box
      sx={{
        backgroundColor: "common.white",
        borderBottom: hasBorderBottom ? "1px solid" : "",
        paddingX,
        py: 1.5,
      }}
    >
      <LogInfo logType={activityType?.toLowerCase()} log={activityInfo} />
      <BodyText
        marginTop={0.5}
        color={"grey.600"}
        component={"p"}
        variant="body2"
      >
        {formatDateTime(activityDate, dateFormat)}
      </BodyText>
    </Box>
  );
};
