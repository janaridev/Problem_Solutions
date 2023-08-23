#include <iostream>

int main() {
    int kg;
    std::cin >> kg;

    std::string isDivide = (kg % 2 == 0 && kg > 2) ? "YES" : "NO";
    std::cout << isDivide << std::endl;

    return 0;
}
