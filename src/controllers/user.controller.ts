// // // src/controllers/user.controller.ts


import { Request, Response } from 'express';
import * as userService from '../services/user.service';
import { handleError } from '../utils/error-handler';


export const register = async (req: Request, res: Response) => {
  try {
    const user = await userService.registerUser(req.body);
    res.status(201).json(user);
  } catch (error) {
    handleError(res, error);
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const result = await userService.loginUser(email, password);
    res.json(result);
  } catch (error) {
    handleError(res, error);
  }
};

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await userService.getAllUsers();
    res.json(users);
  } catch (error) {
    handleError(res, error);
  }
};

export const getUser = async (req: Request, res: Response) => {
  try {
    const user = await userService.getUserById(req.params.id);
    res.json(user);
  } catch (error) {
    handleError(res, error);
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const user = await userService.updateUser(req.params.id, req.body);
    res.json(user);
  } catch (error) {
    handleError(res, error);
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    await userService.deleteUser(req.params.id);
    res.status(204).send();
  } catch (error) {
    handleError(res, error);
  }
}; 











// // // // src/controllers/user.controller.ts


// // src/controllers/user.controller.ts
// import { Request, Response } from 'express';
// import * as userService from '../services/user.service';
// import { handleError } from '../utils/error-handler';

// export const register = async (req: Request, res: Response) => {
//   try {
//     const user = await userService.registerUser(req.body);
    
//     // Set HTTP-only cookie for registration if you want auto-login
//     res.cookie('token', user.token, {
//       httpOnly: true,
//       secure: process.env.NODE_ENV === 'production',
//       sameSite: 'strict',
//       maxAge: 24 * 60 * 60 * 1000 // 1 day
//     });
    
//     res.status(201).json({ user: user.user });
//   } catch (error) {
//     handleError(res, error);
//   }
// };

// export const login = async (req: Request, res: Response) => {
//   try {
//     const { email, password } = req.body;
//     const result = await userService.loginUser(email, password);

//     // Set HTTP-only cookie
//     res.cookie('token', result.token, {
//       httpOnly: true,
//       secure: process.env.NODE_ENV === 'production',
//       sameSite: 'strict',
//       maxAge: 24 * 60 * 60 * 1000 // 1 day
//     });

//     // Return user data without the token
//     res.json({ user: result.user });
//   } catch (error) {
//     handleError(res, error);
//   }
// };

// export const logout = async (req: Request, res: Response) => {
//   try {
//     // Clear the cookie
//     res.clearCookie('token');
//     res.json({ message: 'Logged out successfully' });
//   } catch (error) {
//     handleError(res, error);
//   }
// };

// export const getAllUsers = async (req: Request, res: Response) => {
//   try {
//     const users = await userService.getAllUsers();
//     res.json(users);
//   } catch (error) {
//     handleError(res, error);
//   }
// };

// export const getUser = async (req: Request, res: Response) => {
//   try {
//     const user = await userService.getUserById(req.params.id);
//     res.json(user);
//   } catch (error) {
//     handleError(res, error);
//   }
// };

// export const updateUser = async (req: Request, res: Response) => {
//   try {
//     const user = await userService.updateUser(req.params.id, req.body);
//     res.json(user);
//   } catch (error) {
//     handleError(res, error);
//   }
// };

// export const deleteUser = async (req: Request, res: Response) => {
//   try {
//     await userService.deleteUser(req.params.id);
//     res.status(204).send();
//   } catch (error) {
//     handleError(res, error);
//   }
// }; 
