package com.tw;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class FactorialTest {

    @Test
    void factorialOfOneEqualsOne(){
        assertEquals(1,Factorial.factorial(1));
    }

    @Test
    void factorialOfTwoEqualsTwo(){
        assertEquals(2,Factorial.factorial(2));
    }

    @Test
    void factorialOfZeroEqualsOne(){
        assertEquals(1,Factorial.factorial(1));
    }

    @Test
    void factorialOfFiveEqualsOneTwenty(){
        assertEquals(120,Factorial.factorial(5));
    }

    @Test
    void factorialOfTenEquals3628800(){
        assertEquals(3628800,Factorial.factorial(10));
    }
}