import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { Styles } from "../../../Colors";
import UserList from "../../../Customs/UserList";
import { UserType } from "../../../Customs/Types";
import { AllCoaches } from "../../../Globals/AppValues";
import { FetchCoaches } from "../../../Globals/FetchFunctions";

interface CoachManagementHomeProps {
	navigation: any;
}

const CoachManagementHome: React.FC<CoachManagementHomeProps> = ({
	navigation,
}) => {
	const [allCoaches, setAllCoaches] = useState<UserType[]>(AllCoaches);
	useEffect(() => {
		if (allCoaches.length === 0) FetchCoaches(setAllCoaches);
	}, []);
	return (
		<View
			style={[Styles.MainContainer, { alignItems: "stretch", paddingTop: 0 }]}
		>
			<UserList
				users={allCoaches}
				navigation={navigation}
				setUsers={undefined}
				none_found={"No coaches found"}
			/>
		</View>
	);
};

export default CoachManagementHome;
