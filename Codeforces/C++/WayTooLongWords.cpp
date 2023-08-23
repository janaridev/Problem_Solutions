#include <iostream>
#include <string>

int main() {
    int n;
    std::cin >> n;
    
    for (int i = 0; i < n; ++i) {
        std::string word;
        std::cin >> word;
        
        if (word.size() > 10) {
            std::string abbreviation;
            abbreviation += word[0];
            abbreviation += std::to_string(word.size() - 2);
            abbreviation += word.back();
            
            std::cout << abbreviation << std::endl;
        } else {
            std::cout << word << std::endl;
        }
    }

    return 0;
}
