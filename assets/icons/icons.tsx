import { Feather, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

export const ArrowRight = (props: any) => (
  <Feather name="arrow-right" size={18} color="#fff" {...props} />
);
export const ArrowLeft = (props: any) => (
  <Feather name="arrow-left" size={"#Ffff"} color="#fff" {...props} />
);
export const Email = (props: any) => (
  <MaterialCommunityIcons
    name="email-outline"
    size={18}
    color={"#fff"}
    {...props}
  />
);
export const Lock = (props: any) => (
  <Feather name="lock" size={18} color={"#fff"} {...props} />
);

export const Eye = (props: any) => (
  <Ionicons name="eye-outline" size={18} color={"#fff"} {...props} />
);
export const EyeFilled = (props: any) => (
  <Ionicons name="eye-sharp" size={18} color={"#fff"} {...props} />
);
export const EyeOff = (props: any) => (
  <Ionicons name="eye-off-outline" size={18} color={"#fff"} {...props} />
);
export const EyeOffFilled = (props: any) => (
  <Ionicons name="eye-off-sharp" size={18} color={"#fff"} {...props} />
);
