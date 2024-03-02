const convertDropdownToArrayList = (dataParams) => {
  let data = [];
  if (dataParams) {
    for (let index = 0; index < dataParams.length; index++) {
      const transformdata = {
        label: dataParams[index].name,
        value: dataParams[index]._id,
      };

      data.push(transformdata);
    }
  }
  return data;
};

export { convertDropdownToArrayList };
