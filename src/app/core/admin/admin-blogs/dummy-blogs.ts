import { User } from '../../../models/user';

export interface Blog {
  id: number;
  title: string;
  author?: User;
  date: string;
  description: string;
  status: string;
  content?: string;
  image?: string;
  comments?: Comment[];
}

export const blogs: Blog[] = [
  {
    id: 1,
    title: 'The Future of Technology',
    author: {
      firstname: 'John',
      lastname: 'Doe',
      email: 'john.doe@example.com',
    },
    date: '2025-01-01',
    description: 'Exploring the latest trends in technology and innovation.',
    status: 'approved',
    content:
      'In this blog, we discuss the top technology trends to watch in 2025...',
    image: 'https://via.placeholder.com/300x200',
  },
  {
    id: 2,
    title: 'Sustainable Living: Tips and Tricks',
    author: {
      firstname: 'Jane',
      lastname: 'Smith',
      email: 'jane.smith@example.com',
    },
    date: '2025-01-05',
    description: 'Simple changes you can make for a greener lifestyle.',
    status: 'approved',
    content:
      'Sustainability is more than a buzzword. Here’s how to integrate it into your daily life...',
    image: 'https://via.placeholder.com/300x200',
  },
  {
    id: 3,
    title: 'Mastering Work-Life Balance',
    author: {
      firstname: 'Alex',
      lastname: 'Johnson',
      email: 'alex.johnson@example.com',
    },
    date: '2025-01-10',
    description:
      'How to stay productive while maintaining personal well-being.',
    status: 'pending',
    content:
      'Finding balance between work and life is a challenge. Here are some strategies...',
    image: 'https://via.placeholder.com/300x200',
  },
  {
    id: 4,
    title: 'A Guide to Mindfulness Meditation',
    author: {
      firstname: 'John',
      lastname: 'Doe',
      email: 'john.doe@example.com',
    },
    date: '2025-01-15',
    description: 'Discover the benefits of mindfulness meditation.',
    status: 'approved',
    content:
      'Mindfulness meditation can transform your mental well-being. Learn how to get started...',
    image: 'https://via.placeholder.com/300x200',
  },
  {
    id: 5,
    title: 'Top Travel Destinations for 2025',
    author: {
      firstname: 'Emily',
      lastname: 'Davis',
      email: 'emily.davis@example.com',
    },
    date: '2025-01-20',
    description: 'Explore the most popular travel spots for the year ahead.',
    status: 'approved',
    content:
      'From tropical beaches to cultural landmarks, these destinations are a must-visit in 2025...',
    image: 'https://via.placeholder.com/300x200',
  },
  {
    id: 6,
    title: 'The Impact of AI on Daily Life',
    author: {
      firstname: 'Jane',
      lastname: 'Smith',
      email: 'jane.smith@example.com',
    },
    date: '2025-01-22',
    description:
      'Understanding how AI is transforming the way we live and work.',
    status: 'pending',
    content:
      'Artificial intelligence is no longer the future—it’s the present. Here’s how it’s changing things...',
    image: 'https://via.placeholder.com/300x200',
  },
  {
    id: 7,
    title: 'Healthy Eating Made Easy',
    author: {
      firstname: 'Michael',
      lastname: 'Brown',
      email: 'michael.brown@example.com',
    },
    date: '2025-01-25',
    description: 'Simple and delicious recipes for a healthier you.',
    status: 'approved',
    content:
      'Eating healthy doesn’t have to be hard. These recipes are quick, tasty, and nutritious...',
    image: 'https://via.placeholder.com/300x200',
  },
];
