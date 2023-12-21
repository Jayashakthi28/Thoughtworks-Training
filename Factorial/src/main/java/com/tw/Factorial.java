package com.tw;

import java.util.*;

public class Factorial {
    public static int factorial(int number){
        if(number<=1){
            return 1;
        }
        return number*factorial(number-1);
    }

    public static void main(String[] args){
        Scanner scanner=new Scanner(System.in);
        System.out.println("Enter a number");
        int number=scanner.nextInt();
        System.out.println("The factorial of "+number+" is "+factorial(number));
    }
}
