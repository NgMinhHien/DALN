import { User } from '../models/User';

const users: User[] = [];

export const registerUser = (userData: User): User => {
    const newUser = { ...userData, id: users.length + 1 };
    users.push(newUser);
    return newUser;
};

export const loginUser = (username: string, password: string): User | null => {
    const user = users.find(user => user.username === username && user.password === password);
    return user || null;
};

export const getUserProfile = (userId: number): User | undefined => {
    return users.find(user => user.id === userId);
};

export const updateUser = (userId: number, updatedData: Partial<User>): User | undefined => {
    const userIndex = users.findIndex(user => user.id === userId);
    if (userIndex !== -1) {
        users[userIndex] = { ...users[userIndex], ...updatedData };
        return users[userIndex];
    }
    return undefined;
};