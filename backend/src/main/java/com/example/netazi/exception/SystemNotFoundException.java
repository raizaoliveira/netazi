package com.example.netazi.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.NOT_FOUND)
public class SystemNotFoundException extends RuntimeException {
    public SystemNotFoundException() {
        super();
    }

    public SystemNotFoundException(String message) {
        super(message);
    }

    public SystemNotFoundException(String message, Throwable cause) {
        super(message, cause);
    }
}
