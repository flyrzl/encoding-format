#include <stdio.h>
#include <uchar.h>

char c[] = "z";
char omega[] = "Ω";
char lian[] = "恋";
char16_t u_omega[] = u"Ω"; 
char16_t u_lian[] = u"恋";

int main() {
    printf("%s\n%s\n%s\n", c, omega, lian);
    
    return 0;
}