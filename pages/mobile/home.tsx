import { GetServerSideProps } from "next";
import * as React from "react";

interface IHomeMobProps {}

const HomeMob: React.FC<IHomeMobProps> = (props) => {
	return <></>;
};

export default HomeMob;

export const getServerSideProps: GetServerSideProps = async (context) => {
	return {
		redirect: { destination: "/mobile", permanent: true },
	};
};
