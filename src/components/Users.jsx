// we are going to show all users
// we are going to "listen" to input result
// we can filter users according to input results

const Users = props => {
  const { filteredUsers } = props;
  return (
    <div>
      {/* map over the filteredUsers array, and for each user, display their name: */}
      {filteredUsers.map(user => (
        <div>{user.name}</div>
      ))}
    </div>
  );
};

export default Users;
