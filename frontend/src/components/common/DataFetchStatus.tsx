import React from "react";
import { Loader, ShieldX } from "lucide-react";
import styled from "@emotion/styled";

const SectionError = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

interface DataFetchStatusProps {
  isLoading: boolean;
  isError: boolean;
  data: any; // Adjust this type according to the type of your data
}

const DataFetchStatus: React.FC<DataFetchStatusProps> = ({
  isLoading,
  isError,
  data,
}) => {
  if (isLoading) {
    return (
      <SectionError>
        <Loader size={80} color="yellow" />
        <div>Loading ...</div>
      </SectionError>
    );
  }

  if (isError) {
    return (
      <SectionError>
        <ShieldX size={80} color="red" />
        <div>Error fetching data</div>
      </SectionError>
    );
  }

  if (!data) {
    return <div>No data found</div>;
  }

  return null;
};

export default DataFetchStatus;
