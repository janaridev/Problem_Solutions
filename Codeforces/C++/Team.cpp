#include <iostream>

int main() {
    int n;
    std::cin >> n;
    
    int problemSolved = 0;
    for (int i = 0; i < n; i++) {
        int petya, vasya, tonya;
        std::cin >> petya >> vasya >> tonya;
        
        int confidentCount = petya + vasya + tonya;
        if (confidentCount > 1) {
            problemSolved += 1;
        }
    }
    std::cout << problemSolved << std::endl;

    return 0;
}