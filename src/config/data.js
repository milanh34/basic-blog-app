export const blogList = [
  {
    id: 1,
    title: "7 CSS tools you should be using",
    category: "development",
    subCategory: ["frontend", "ui/ux", "design"],
    description: "Lorem Ipsum is simply dummy text...",
    authorName: "John Doe",
    authorId: 1,
    authorAvatar: '/assets/images/author.jpg',
    createdAt: "June 03, 2021",
    cover: "/assets/images/designer-1.jpg",
    commentsCount: 1,
    reactionsCount: 2,
    comments: [
      {
        id: 1,
        userId: 2,
        userName: "Alice",
        comment: "Great article!",
        createdAt: "June 04, 2021",
      },
    ],
    reactions: [
      { userId: 2, reaction: "like" },
      { userId: 3, reaction: "love" },
    ],
  },
  {
    id: 2,
    title: "Milan Places That Highlight The City",
    category: "travel",
    subCategory: ["vacation", "holidays", "sight seeing"],
    description: "Lorem Ipsum is simply dummy text...",
    authorName: "Alice Smith",
    authorId: 2,
    authorAvatar: '/assets/images/author.jpg',
    createdAt: "June 08, 2021",
    cover: "/assets/images/f67396fc3cfce63a28e07ebb35d974ac.jpg",
    commentsCount: 2,
    reactionsCount: 2,
    comments: [
      {
        id: 1,
        userId: 1,
        userName: "John Doe",
        comment: "Awesome places!",
        createdAt: "June 09, 2021",
      },
      {
        id: 2,
        userId: 3,
        userName: "Bob Jones",
        comment: "I want to visit Milan!",
        createdAt: "June 10, 2021",
      },
    ],
    reactions: [
      { userId: 1, reaction: "like" },
      { userId: 3, reaction: "love" },
    ],
  },
  {
    id: 3,
    title: "10 Essential JavaScript Concepts",
    category: "development",
    subCategory: ["frontend", "backend"],
    description: "Learn the fundamental concepts of JavaScript programming...",
    authorName: "Jane Smith",
    authorId: 3,
    authorAvatar: '/assets/images/author.jpg',
    createdAt: "June 15, 2021",
    cover: "/assets/images/fQwuyKJ9qxjSbr6REcgtmW-1200-80.jpg",
    commentsCount: 3,
    reactionsCount: 5,
    comments: [
      {
        id: 1,
        userId: 2,
        userName: "Alice",
        comment: "Great insights!",
        createdAt: "June 16, 2021",
      },
      {
        id: 2,
        userId: 4,
        userName: "Eve",
        comment: "Helpful article, thanks!",
        createdAt: "June 17, 2021",
      },
      {
        id: 3,
        userId: 5,
        userName: "Charlie",
        comment: "I learned a lot from this.",
        createdAt: "June 18, 2021",
      },
    ],
    reactions: [
      { userId: 2, reaction: "like" },
      { userId: 4, reaction: "like" },
      { userId: 6, reaction: "love" },
    ],
  },
  {
    id: 4,
    title: "Exploring the Wonders of Nature",
    category: "nature",
    subCategory: ["outdoors", "wildlife", "environment"],
    description: "Discover the beauty and diversity of nature...",
    authorName: "David Brown",
    authorId: 4,
    authorAvatar: '/assets/images/author.jpg',
    createdAt: "June 20, 2021",
    cover: "/assets/images/graphic-design-trends.png",
    commentsCount: 2,
    reactionsCount: 3,
    comments: [
      {
        id: 1,
        userId: 2,
        userName: "Alice",
        comment: "Nature is truly amazing!",
        createdAt: "June 21, 2021",
      },
      {
        id: 2,
        userId: 3,
        userName: "Bob",
        comment: "I love spending time in nature.",
        createdAt: "June 22, 2021",
      },
    ],
    reactions: [
      { userId: 2, reaction: "like" },
      { userId: 5, reaction: "love" },
    ],
  },
  {
    id: 5,
    title: "The Art of Cooking: Mastering Culinary Skills",
    category: "cooking",
    subCategory: ["recipes", "techniques", "food"],
    description: "Unlock the secrets of cooking like a professional chef...",
    authorName: "Sarah Johnson",
    authorId: 5,
    authorAvatar: '/assets/images/make-it-personal.jpg',
    createdAt: "June 25, 2021",
    cover: "/assets/images/Synthwave-Postmodern.jpg",
    commentsCount: 1,
    reactionsCount: 4,
    comments: [
      {
        id: 1,
        userId: 1,
        userName: "John",
        comment: "This recipe looks delicious!",
        createdAt: "June 26, 2021",
      },
    ],
    reactions: [
      { userId: 2, reaction: "like" },
      { userId: 3, reaction: "love" },
      { userId: 4, reaction: "like" },
    ],
  },
  // Add more blogs...
];


export const authorsList = [
  {
    id: 1,
    name: "John Doe",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    avatar: "/assets/images/john-doe-avatar.jpg",
  },
  {
    id: 2,
    name: "Alice Smith",
    bio: "Passionate traveler and writer.",
    avatar: "/assets/images/user2-avatar.jpg",
  },
  {
    id: 3,
    name: "Bob Jones",
    bio: "Tech enthusiast and blogger.",
    avatar: "/assets/images/user3-avatar.jpg",
  },
  // Add more authors as needed
];

export const usersList = [
  {
    id: 1,
    username: "john_doe",
    avatar: "/assets/images/user1-avatar.jpg",
  },
  {
    id: 2,
    username: "alice_smith",
    avatar: "/assets/images/user2-avatar.jpg",
  },
  // Add more users as needed
];
