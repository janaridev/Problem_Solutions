/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode(int x) : val(x), next(NULL) {}
 * };
 */
class Solution {
public:
    bool hasCycle(ListNode *head) {
        if (head == NULL || head->next == NULL) {
            return false;
        }

        ListNode *rabbit = head->next;
        ListNode *turtle = head;

        while (rabbit != NULL && rabbit->next != NULL) {
            if (rabbit->next->next == NULL || turtle->next == NULL) {
                return false;
            }

            if (rabbit == turtle) {
                return true;
            }
            
            rabbit = rabbit->next->next;
            turtle = turtle->next;
        }

        return rabbit == turtle;
    }
};