import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native";
import { Styles } from "../../../Colors";
import UserList from "../../../Customs/UserList";
import { FetchTreasurers } from "../../../Globals/FetchFunctions";
import { UserType } from "../../../Customs/Types";
import { AllTreasurers } from "../../../Globals/AppValues";

interface TreasurerManagementHomeProps {
	navigation: any;
}

const TreasurerManagementHome: React.FC<TreasurerManagementHomeProps> = ({
	navigation,
}): React.JSX.Element => {
	const [allTreasurers, SetAllTreasurers] = useState<UserType[]>(AllTreasurers);
	useEffect(() => {
		if (allTreasurers.length === 0) FetchTreasurers(SetAllTreasurers);
	}, []);
	return (
		<SafeAreaView
			style={[Styles.MainContainer, { alignItems: "stretch", paddingTop: 5 }]}
		>
			<UserList
				users={allTreasurers}
				navigation={navigation}
				setUsers={undefined}
				none_found={"No treasurers found"}
			/>
		</SafeAreaView>
	);
};

export default TreasurerManagementHome;
