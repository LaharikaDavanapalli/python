import dice
print("$"*25,"HILLCLIMBFALL","$"*25)
player1=input("enter player1 name")
player2=input("enter player2 name")
list_a=[]
list_b=[]
i=0
while(sum(list_a)!=10 and sum(list_b)!=10):
    if(i%2==0 and input("player1 Enter p to play:")=='p'):
        if(sum(list_a)<10):
            diceno=dice.diceroll()
            print(f"Diceno.-->{diceno}")
            list_a.append(diceno)
        else:
            list_a.clear()
        print("step no-->",sum(list_a))
        i+=1
    elif(i%2!=0 and input("player2 Enter p to play:")=='p'):
        if(sum(list_b)<10):
            diceno=dice.diceroll()
            print("\n Diceno.-->",diceno)
            list_b.append(diceno)
        else:
            list_b.clear()
        print("step no. -->",sum(list_b))
        i+=1
    else:
        break
if(sum(list_a)==10):
    print(f"{player1} is winner")
elif(sum(list_b)==10):
    print(f"{player1} is winner")
else:
    print("thanku")