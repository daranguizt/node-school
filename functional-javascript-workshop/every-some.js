function checkUsersValid(goodUsers) {
  return function allUsersValid(submittedUsers) {
    let flag = submittedUsers.every((submittedUser) => {
      return goodUsers.some((goodUser) => goodUser.id == submittedUser.id);
    });

    return flag;

  };
}

module.exports = checkUsersValid;
