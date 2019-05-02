import React from "react";
import Section from "../../lib/components/Section";

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

const groupByDepartment = groupBy("department");

const Dashboard = ({ robots }) => {
  const robotsByDepartment = groupByDepartment(robots);

  return (
    <Section>
      <ul>
        {Object.keys(robotsByDepartment).map(n => {
          return (
            <li>
              {n} - {robotsByDepartment[n].length / robots.length}
            </li>
          );
        })}
      </ul>
    </Section>
  );
};

Dashboard.displayName = "Dashboard";

export default Dashboard;
