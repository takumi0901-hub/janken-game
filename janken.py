import random

hands = ["グー", "チョキ", "パー"]

print("じゃんけんゲーム")
while True:
    print("0: グー  1: チョキ  2: パー  (9: 終了)")
    choice = input("手を選んでください: ")

    if choice == "9":
        print("終了します")
        break
    if choice not in ["0", "1", "2"]:
        print("0, 1, 2, 9 のどれかを入力してください")
        continue

    player = int(choice)
    cpu = random.randint(0, 2)
    print(f"あなた: {hands[player]} / コンピュータ: {hands[cpu]}")

    if player == cpu:
        print("あいこ")
    elif (player - cpu) % 3 == 2:
        print("あなたの勝ち！")
    else:
        print("あなたの負け…")
