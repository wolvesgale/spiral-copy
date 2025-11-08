"use client";

import { useMemo, useState } from "react";
import { rooms, isRoomAvailable } from "@/data/rooms";

type BookingPayload = {
  roomId: string;
  date: string;
  nights: number;
  guests: number;
  name: string;
  email: string;
  phone: string;
};

type Step = 1 | 2 | 3 | 4 | 5;

export default function BookingClient() {
  const today = useMemo(() => new Date().toISOString().slice(0, 10), []);
  const [step, setStep] = useState<Step>(1);

  const [date, setDate] = useState<string>(today);
  const [nights, setNights] = useState<number>(1);
  const [guests, setGuests] = useState<number>(2);
  const [roomId, setRoomId] = useState<string>(rooms[0].id);

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");

  const [loading, setLoading] = useState(false);
  const [reservationId, setReservationId] = useState<string | null>(null);
  const [showThanks, setShowThanks] = useState(false);

  const selectedRoom = useMemo(() => rooms.find((r) => r.id === roomId)!, [roomId]);
  const available = useMemo(() => isRoomAvailable(selectedRoom, date), [selectedRoom, date]);
  const total = useMemo(() => selectedRoom.pricePerNight * nights, [selectedRoom, nights]);

  function next() {
    setStep((s) => (s === 5 ? 5 : ((s + 1) as Step)));
  }

  function back() {
    setStep((s) => (s === 1 ? 1 : ((s - 1) as Step)));
  }

  async function submitReservation() {
    setLoading(true);
    try {
      const payload: BookingPayload = {
        roomId,
        date,
        nights,
        guests,
        name,
        email,
        phone,
      };
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("予約APIエラー");
      const json = await res.json();
      setReservationId(json.reservationId ?? null);
      setStep(4);
    } catch (error) {
      alert("予約処理に失敗しました。時間をおいてお試しください。");
    } finally {
      setLoading(false);
    }
  }

  function finalize() {
    setShowThanks(true);
    setStep(5);
  }

  return (
    <div className="space-y-8">
      <Stepper current={step} />

      {step === 1 && (
        <section className="space-y-6">
          <h2 className="text-xl font-semibold">1. ご利用条件の選択</h2>

          <div className="grid gap-4 md:grid-cols-3">
            <div>
              <label className="block text-sm mb-1">チェックイン日</label>
              <input
                type="date"
                value={date}
                min={today}
                onChange={(event) => setDate(event.target.value)}
                className="w-full rounded-md border px-3 py-2 bg-background"
              />
            </div>

            <div>
              <label className="block text-sm mb-1">泊数</label>
              <input
                type="number"
                min={1}
                max={14}
                value={nights}
                onChange={(event) => setNights(parseInt(event.target.value || "1", 10))}
                className="w-full rounded-md border px-3 py-2 bg-background"
              />
            </div>

            <div>
              <label className="block text-sm mb-1">人数</label>
              <input
                type="number"
                min={1}
                max={4}
                value={guests}
                onChange={(event) => setGuests(parseInt(event.target.value || "1", 10))}
                className="w-full rounded-md border px-3 py-2 bg-background"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm mb-2">お部屋タイプ</label>
            <div className="grid gap-4 md:grid-cols-3">
              {rooms.map((room) => {
                const ok = isRoomAvailable(room, date);
                const active = room.id === roomId;
                return (
                  <button
                    key={room.id}
                    type="button"
                    onClick={() => setRoomId(room.id)}
                    className={`text-left rounded-xl border p-4 transition ${
                      active ? "border-foreground" : "border-border"
                    } ${!ok ? "opacity-50 pointer-events-none" : ""}`}
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold">{room.name}</h3>
                      <span className="text-sm px-2 py-0.5 rounded-full border">
                        {ok ? "空室あり" : "満室"}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">{room.description}</p>
                    <p className="mt-3 font-semibold">{room.pricePerNight.toLocaleString()}円 / 泊</p>
                    <p className="text-xs text-muted-foreground">定員 {room.capacity} 名</p>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="flex items-center justify-between pt-2">
            <div className="text-sm">
              {available
                ? "選択中の部屋は空室です。"
                : "選択中の部屋は満室です。別日または別タイプをご選択ください。"}
            </div>
            <button
              type="button"
              disabled={!available}
              onClick={next}
              className="rounded-md bg-foreground text-background px-4 py-2 disabled:opacity-50"
            >
              確認へ進む
            </button>
          </div>
        </section>
      )}

      {step === 2 && (
        <section className="space-y-6">
          <h2 className="text-xl font-semibold">2. 内容の確認・ご連絡先</h2>

          <Summary
            date={date}
            nights={nights}
            guests={guests}
            roomName={selectedRoom.name}
            total={total}
          />

          <div className="grid gap-4 md:grid-cols-3">
            <div>
              <label className="block text-sm mb-1">お名前</label>
              <input
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="例）前田 拡夢"
                className="w-full rounded-md border px-3 py-2 bg-background"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">メールアドレス</label>
              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="you@example.com"
                className="w-full rounded-md border px-3 py-2 bg-background"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">お電話番号</label>
              <input
                type="tel"
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
                placeholder="090-XXXX-XXXX"
                className="w-full rounded-md border px-3 py-2 bg-background"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <button onClick={back} className="rounded-md border px-4 py-2">
              戻る
            </button>
            <button
              onClick={() => setStep(3)}
              disabled={!name || !email}
              className="rounded-md bg-foreground text-background px-4 py-2 disabled:opacity-50"
            >
              予約へ進む
            </button>
          </div>
        </section>
      )}

      {step === 3 && (
        <section className="space-y-6">
          <h2 className="text-xl font-semibold">3. 予約の送信</h2>
          <Summary
            date={date}
            nights={nights}
            guests={guests}
            roomName={selectedRoom.name}
            total={total}
          />
          <div className="flex items-center justify-between">
            <button onClick={back} className="rounded-md border px-4 py-2">
              戻る
            </button>
            <button
              onClick={submitReservation}
              disabled={loading}
              className="rounded-md bg-foreground text-background px-4 py-2 disabled:opacity-50"
            >
              {loading ? "送信中…" : "予約を送信する"}
            </button>
          </div>
        </section>
      )}

      {step === 4 && (
        <section className="space-y-6">
          <h2 className="text-xl font-semibold">4. 最終確認</h2>
          <p className="text-sm text-muted-foreground">
            下記の受付番号で仮予約を受け付けました。内容に問題なければ「確定する」を押してください。
          </p>
          <div className="rounded-xl border p-4">
            <div className="text-sm">受付番号</div>
            <div className="text-xl font-bold">{reservationId ?? "—"}</div>
          </div>
          <div className="flex items-center justify-between">
            <button onClick={back} className="rounded-md border px-4 py-2">
              戻る
            </button>
            <button onClick={finalize} className="rounded-md bg-foreground text-background px-4 py-2">
              確定する
            </button>
          </div>
        </section>
      )}

      {step === 5 && (
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">5. 完了</h2>
          <p className="text-muted-foreground">ご予約の手続きが完了しました。ありがとうございました。</p>
          <button
            onClick={() => {
              setStep(1);
              setShowThanks(false);
            }}
            className="rounded-md border px-4 py-2"
          >
            もう一度予約する
          </button>
        </section>
      )}

      {showThanks && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-background border rounded-2xl p-6 max-w-md w-full text-center">
            <h3 className="text-xl font-semibold mb-2">ご予約ありがとうございます</h3>
            <p className="text-sm text-muted-foreground">
              受付番号 <span className="font-semibold">{reservationId ?? "—"}</span> をお控えください。
            </p>
            <button
              onClick={() => setShowThanks(false)}
              className="mt-6 rounded-md bg-foreground text-background px-4 py-2"
            >
              閉じる
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function Summary({
  date,
  nights,
  guests,
  roomName,
  total,
}: {
  date: string;
  nights: number;
  guests: number;
  roomName: string;
  total: number;
}) {
  return (
    <div className="rounded-xl border p-4">
      <div className="grid md:grid-cols-4 gap-4 text-sm">
        <div>
          <div className="text-muted-foreground">チェックイン</div>
          <div className="font-semibold">{date}</div>
        </div>
        <div>
          <div className="text-muted-foreground">泊数</div>
          <div className="font-semibold">{nights} 泊</div>
        </div>
        <div>
          <div className="text-muted-foreground">人数</div>
          <div className="font-semibold">{guests} 名</div>
        </div>
        <div>
          <div className="text-muted-foreground">お部屋</div>
          <div className="font-semibold">{roomName}</div>
        </div>
      </div>
      <div className="mt-3 text-right font-bold text-lg">合計 {total.toLocaleString()} 円（税込）</div>
    </div>
  );
}

function Stepper({ current }: { current: Step }) {
  const steps = ["選択", "確認", "予約", "最終確認", "完了"];
  return (
    <ol className="flex items-center gap-2 text-sm">
      {steps.map((label, index) => {
        const n = (index + 1) as Step;
        const active = n === current;
        const done = n < current;
        return (
          <li key={label} className="flex items-center gap-2">
            <span
              className={`w-6 h-6 rounded-full inline-flex items-center justify-center border ${
                done
                  ? "bg-foreground text-background"
                  : active
                  ? "border-foreground"
                  : "opacity-60"
              }`}
            >
              {index + 1}
            </span>
            <span className={active ? "font-semibold" : "text-muted-foreground"}>{label}</span>
            {index < steps.length - 1 && <span className="mx-2 opacity-50">—</span>}
          </li>
        );
      })}
    </ol>
  );
}
