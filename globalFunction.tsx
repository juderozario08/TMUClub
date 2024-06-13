import { Eye, EyeOff } from "react-feather";

const determineEye = (passwordShow) => {
    return passwordShow ? (
        <Eye color={"darkgray"} fill={"none"} />
    ) : (
        <EyeOff color={"darkgray"} fill={"none"} />
    );
};
