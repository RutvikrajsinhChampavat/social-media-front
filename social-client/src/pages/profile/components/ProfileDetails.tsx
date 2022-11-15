import { Avatar, Box, Grid, IconButton, Typography } from "@mui/material";
import CustomBotton from "../../../components/CustomBotton";
import theme from "../../../utils/theme";
import { flexMiddle } from "../../../assets/commonStyles";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { useSelector } from "react-redux";

const ProfileDetails = () => {
  const { user } = useSelector((state: any) => state.UserReducer);

  return (
    <Grid container direction={"row"}>
      <Grid item md={4}>
        <Avatar src={user.avatar} sx={{ width: 150, height: 150, mr: 15 }} />
      </Grid>
      <Grid item md={8}>
        <Box sx={{ ...flexMiddle, justifyContent: "space-between" }}>
          <Typography
            variant="h4"
            sx={{ wordWrap: "break-word", width: "64%" }}
          >
            {user.username}
          </Typography>
          <Box whiteSpace={"nowrap"}>
            <CustomBotton
              variant="outlined"
              lable="Edit Profile"
              handleClick={() => {}}
              size="small"
              sx={{
                color: () => theme.palette.primary.main,
                borderColor: () => theme.palette.primary.main,
                mx: 2,
              }}
            />
            <IconButton
              sx={{
                color: () => theme.palette.primary.main,
              }}
            >
              <SettingsOutlinedIcon />
            </IconButton>
          </Box>
        </Box>
        <Box sx={{ ...flexMiddle, flexDirection: "row", my: 2 }}>
          <Typography fontWeight="bold">{user.postCount} Posts</Typography>
          <Typography mx={2} fontWeight="bold">
            {user.followerCount} Followers
          </Typography>
          <Typography fontWeight="bold">
            {user.followingCount} Following
          </Typography>
        </Box>

        <Typography fontWeight="bold">{user.fullName}</Typography>
        <Typography whiteSpace="pre-line">{user.bio}</Typography>
      </Grid>
    </Grid>
  );
};

export default ProfileDetails;
