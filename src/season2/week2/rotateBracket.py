from collections import deque

def check_correct(input_bracket):
    is_correct_bracket = True
    starts = []
    
    brackets = {'{':'}', '(':')', '[': ']'}
    
    start_brackets = list(brackets.keys())
    end_brackets = list(brackets.values())

    while len(input_bracket) > 0:
        bracket = input_bracket.popleft()
        if (bracket in start_brackets):
            starts.append(bracket)
        
        if (bracket in end_brackets):
            if (len(starts) == 0 or (len(starts) > 0 and bracket != brackets[starts.pop(len(starts) - 1)])):
                    is_correct_bracket = False
                    break
    return is_correct_bracket
                    
def solution(s):
    answer = -1

    input = list(s)

    input_bracket = deque(input)

    is_correct_bracket = check_correct(input_bracket)
    
    return answer
