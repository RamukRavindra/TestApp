import { Dimensions } from "react-native";

export const DIM = {
    deviceWidth: Math.round(Dimensions.get("window").width),
    deviceHeight: Math.round(Dimensions.get("window").height),
};