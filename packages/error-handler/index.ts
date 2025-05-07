export class AppError extends Error {
  public readonly statusCode: number;
  public readonly isOperational: boolean;
  public readonly details?: any;

  constructor(
    message: string,
    statusCode: number,
    isOperational = true,
    details?: any
  ) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = isOperational;
    this.details = details;
    Error.captureStackTrace(this);
  }
}

// Not found error
export class NotFoundError extends AppError {
  constructor(message = "Resources not found") {
    super(message, 404);
  }
}

// validation error (use for joi/zod/ react-hook-form)
export class ValidationError extends AppError {
  constructor(message = "Invalid request data", details?: any) {
    super(message, 400, true, details);
  }
}

// Authentication error
export class AuthError extends AppError {
  constructor(message = "Unauthorized") {
    super(message, 401);
  }
}

// Forbidden error (For insufficient Permission)
export class ForbiddenError extends AppError {
  constructor(message = "Forbidden access") {
    super(message, 403);
  }
}

//Database Error (for mongodb/postgres error)
export class DatabaseError extends AppError {
  constructor(message = "Database error", details?: any) {
    super(message, 500, true, details);
  }
}

// rate limit error (if user exceeds api calls)
export class RateLimitError extends AppError {
  constructor(message = "Too many requests, please slow down") {
    super(message, 429);
  }
}
