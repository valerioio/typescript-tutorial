const addUID = <T extends object>(obj: T): T & { uid: number } => {
  let uid = Math.floor(Math.random() * 100);
  return { ...obj, uid };
};

const docOne = addUID({ name: "yoshi", age: 40 });

enum ResourceType {
  BOOK,
  AUTHOR,
  FILM,
  DIRECTOR,
  PERSON,
}

interface Resource<T> {
  uid: number;
  resourceType: ResourceType;
  data: T;
}

const docTwo: Resource<object> = {
  uid: 1,
  resourceType: ResourceType.BOOK,
  data: { title: "name of the wind" },
};
