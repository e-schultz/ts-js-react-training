<PeopleList people={[
  { id: 0,
    firstName: "Evan",
    lastName: "Schultz"
  }]} />

const PeopleList = ({people}) => (
  <div>
    {people.map(person => (
        <Person
          key={person.id}
          firstName={person.firstName}
          lastName={person.lastName} />
      )
    )}
  </div>
);
