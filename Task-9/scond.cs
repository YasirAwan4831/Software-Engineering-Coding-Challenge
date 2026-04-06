using System;

class Solution {

    static void Main(String[] args) {
        int t = Convert.ToInt32(Console.ReadLine());
        for(int a0 = 0; a0 < t; a0++){
            int n = Convert.ToInt32(Console.ReadLine());
            
            int sum = 0;
            for(int i = 1; i < n; i++){
                if(i % 3 == 0 || i % 5 == 0){
                    sum += i;
                }
            }
            
            Console.WriteLine(sum);
        }
    }
}