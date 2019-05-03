import React, { useState } from "react";
import Section from "../../lib/components/Section";
import PieChart from "react-minimal-pie-chart";
import palette from "google-palette";
import Column from "../../lib/components/Column";
import Columns from "../../lib/components/Columns";
const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);
const groupBy = prop => collection => {
  /*
  Even though we generally want to avoid mutation,
  especially mutation of objects that we did not create - since we are the creator of the
  object here - we can safely mutate it, as we want to create 
  an object that is grouping items based on a provided property.

  */
  return collection.reduce((result, item) => {
    result[item[prop]] = result[item[prop]] || [];
    result[item[prop]].push(item);
    return result;
  }, {});
};

const filterBy = pred => collection => collection.filter(pred);
const filterByActive = filterBy(robot => robot.active === true);
const filterByInactive = filterBy(robot => robot.active === false);

const groupByDepartment = groupBy("department");

const mapToPieData = data => {
  const keys = Object.keys(data);
  const colors = palette("tol-rainbow", 9).reverse();

  return keys.map((key, index) => {
    return {
      title: key,
      value: data[key].length,
      color: `#${colors[index]}`
    };
  });
};

const generatePieData = pipe(
  groupByDepartment,
  mapToPieData
);
const totalActiveByDepartment = pipe(
  filterByActive,
  generatePieData
);
const totalInActiveByDepartment = pipe(
  filterByInactive,
  generatePieData
);

const Dashboard = ({ robots }) => {
  const [display, setDisplay] = useState("robotsByDepartment");
  const data = {
    robotsByDepartment: generatePieData(robots),
    activeByDepartment: totalActiveByDepartment(robots),
    inActiveByDepartment: totalInActiveByDepartment(robots)
  };

  return (
    <Section>
      <button onClick={() => setDisplay("robotsByDepartment")}>
        robotsByDepartment
      </button>
      <button onClick={() => setDisplay("activeByDepartment")}>
        activeByDepartment
      </button>
      <button onClick={() => setDisplay("inActiveByDepartment")}>
        inActiveByDepartment
      </button>
      <Columns>
        <Column size={1 / 3}>
          {" "}
          <PieChart
            data={data.robotsByDepartment}
            
            label={props => {
              const { percentage, title } = props.data[props.dataIndex];
              return `${title} - ${percentage.toFixed(2)}%`
            }}
            style={{ width: "90%"}}
            
            labelStyle={{
              fontSize: "3px",
              fontFamily: "sans-serif",
              fill: '#121212'
            }}
            labelPosition={70}
            animate
          />
        </Column>
        <Column size={1 / 3}>
          {" "}
          <PieChart
            data={data.activeByDepartment}
            label={props => {
              const { percentage, title } = props.data[props.dataIndex];
              return `${title} - ${percentage.toFixed(2)}%`
            }}
            style={{ width: "90%", margin: "auto" }}
            
            labelStyle={{
              fontSize: "3px",
              fontFamily: "sans-serif",
              fill: '#121212'
            }}
            labelPosition={70}
            animate
          />
        </Column>
        <Column size={1 / 3}>
          {" "}
          <PieChart
            data={data.inActiveByDepartment}
            label={props => {
              const { percentage, title } = props.data[props.dataIndex];
              return `${title} - ${percentage.toFixed(2)}%`
            }}
            style={{ width: "90%", margin: "auto" }}
            
            labelStyle={{
              fontSize: "3px",
              fontFamily: "sans-serif",
              fill: '#121212'
            }}
            labelPosition={70}
            animate
          />
        </Column>
      </Columns>
    </Section>
  );
};

Dashboard.displayName = "Dashboard";

export default Dashboard;
