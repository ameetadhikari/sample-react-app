import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Input,
  Button,
} from "@nextui-org/react";
import { useState } from "react";
import { RiEmotionHappyLine, RiEmotionUnhappyLine } from "react-icons/ri";
import { getStudentData } from "../api/actions";
import React from "react";

const StudentCard: React.FC = () => {
  const [data, setData] = useState<StudentData>();
  const [loadingState, setLoadingState] = useState(false);
  const [student, setCity] = useState("");
  const [error, setError] = useState("");

  const handleSearch = () => {
    console.log("Fetching Student Data...");
    console.log(student);
    setLoadingState(true);
    getStudentData(student)
      .then((res) => {
        setError("");
        if (res) {
          console.log(res);
          setData(res);
          setLoadingState(false);
        }
      })
      .catch((error) => {
        console.error(error);
        setLoadingState(false);
        setData(undefined);
        setError(error);
      });
  };

  return (
    <Card className="max-w-[400px]">
      <CardHeader className="flex gap-3">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSearch();
          }}
        >
          <div className="flex flex-col w-full p-2 space-y-4">
            <Input
              id="studentname"
              type="text"
              label="Student"
              value={student}
              onChange={(e) => {
                setCity(e.target.value);
              }}
            />
            <Button
              className=""
              color="primary"
              isLoading={loadingState}
              type="submit"
            >
              Search
            </Button>
          </div>
        </form>
      </CardHeader>
      <Divider />
      {data ? (
        <CardBody>
          <div className="flex flex-col items-center">
            <h1 className="text-3xl font-bold">{data.student}</h1>
            {data.CN6000 > 50 && data.CN6035 > 50 && data.CN6008 > 50 && data.CN6005 > 50 ? (
              <div>
                <RiEmotionHappyLine className="w-36 h-36" />
              </div>
            ) : (
              <div>
                <RiEmotionUnhappyLine className="w-36 h-36" />
              </div>
            )}
            <p className="text-xl">CN6000: {data.CN6000}%</p>
            <p className="text-lg">CN6035: {data.CN6035}%</p>
            <p className="text-lg">CN6008: {data.CN6008}%</p>
            <p className="text-lg">CN6005: {data.CN6005}%</p>
          </div>
        </CardBody>
      ) : (
        <CardBody>
          <div className="flex flex-col items-center">
            <p className="text-xl font-bold">Please enter a student name</p>
          </div>
        </CardBody>
      )}
      <Divider />
      <CardFooter>
        <div className="flex flex-col items-left">
          {error && <p className="text-xs text-red-600 ">{error}</p>}
          {data && (
            <p className="text-xs  text-gray-600 ">Last update successful.</p>
          )}
          {!data && (
            <p className="text-xs  text-gray-600 ">Waiting for input...</p>
          )}
        </div>
      </CardFooter>
    </Card>
  );
};

export default StudentCard;
