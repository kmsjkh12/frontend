package com.example.Gateway.exception;

public class ExistPostException extends RuntimeException{
    public ExistPostException(){}
    public ExistPostException(String message){
        super(message);
    }
}
