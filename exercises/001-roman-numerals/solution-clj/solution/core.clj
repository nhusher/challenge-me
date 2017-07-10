(ns solution.core)

(def test-cases {
  "1"    "I"
  "2"    "II"
  "5"    "V"
  "10"   "X"
  "20"   "XX"
  "50"   "L"
  "100"  "C"
  "200"  "CC"
  "500"  "D"
  "1000" "M"
  "2000" "MM"
  "4"    "IV"
  "9"    "IX"
  "40"   "XL"
  "90"   "XC"
  "400"  "CD"
  "900"  "CM"
})

(defn -main [ input ]
  (println (test-cases input)))

