interface Message {
  id: number;
  from: {
    id: number;
    name: string;
    image: string;
  };
  to: {
    id: number;
    name: string;
    image: string;
  };
  message: string;
  time: string;
}

const message: Message[] = [
  {
    id: 1,
    from: {
      id: 1,
      name: "John Smith",
      image: "https://mui.com/static/images/avatar/1.jpg",
    },
    to: {
      id: 3,
      name: "Ali",
      image: "#",
    },
    message: "Hi how are you?",
    time: "1 hour ago",
  },
  {
    id: 2,
    from: {
      id: 3,
      name: "Ali",
      image: "#",
    },
    to: {
      id: 1,
      name: "John Smith",
      image: "https://mui.com/static/images/avatar/1.jpg",
    },

    message: "fine, what are you doing ",
    time: "1 hour ago",
  },
];

export default message;
