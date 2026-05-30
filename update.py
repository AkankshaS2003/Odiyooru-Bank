import os

src_dir = r"e:\Yaticorp\bank\src"

# 1. Update App.tsx translations for address and name
app_file = os.path.join(src_dir, "App.tsx")
with open(app_file, "r", encoding="utf-8") as f:
    app_content = f.read()

# Replace address
app_content = app_content.replace(
    "'Plot No. 24, Institutional Area, Sector 7, Rohini, New Delhi, Delhi - 110085'",
    "'Post: Odiyoor, Tq. Uppala Road 574243, Bantwal, Karnataka 574243'"
)

with open(app_file, "w", encoding="utf-8") as f:
    f.write(app_content)

# 2. Global replace for bank name
for root, dirs, files in os.walk(src_dir):
    for file in files:
        if file.endswith(('.tsx', '.ts')):
            filepath = os.path.join(root, file)
            with open(filepath, "r", encoding="utf-8") as f:
                content = f.read()
            
            new_content = content.replace("Indian Cooperative Credit Society Limited", "Odiyooru Souharda Cooperative Society Ltd")
            new_content = new_content.replace("Indian Cooperative Credit Society", "Odiyooru Souharda Cooperative Society Ltd")
            
            if new_content != content:
                with open(filepath, "w", encoding="utf-8") as f:
                    f.write(new_content)

print("Done updating bank name and address")
