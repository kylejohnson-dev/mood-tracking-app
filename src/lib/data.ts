import { sql } from '@vercel/postgres';

export type MoodEntryType = {
  id: string
  created_at: string
  mood: number
  feelings: string[]
  journal_entry: string
  sleep_hours: number
};

export async function fetchMoodEntries(limit?: number | null) {
  if (typeof limit === "undefined") {
    limit = null;
  }
  
  try {
    console.log('Fetching mood_entries...');
    // await new Promise((resolve) => setTimeout(resolve, 3000)); // 3 second delay
    
    const data = limit === null
      ? await sql<MoodEntryType>`SELECT * FROM mood_entries ORDER BY created_at DESC`
      : await sql<MoodEntryType>`SELECT * FROM mood_entries ORDER BY created_at DESC LIMIT ${limit}`;

    console.log('Data fetch completed.');
    console.log(data)

    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch pots data.')
  }
}

// This function fetches the most recent mood entry for today
// It can be used to display the user's mood for the current day but needs to be updated to handle the case when no mood entry exists for today.
export async function fetchTodayMood() {
  try {
    await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate a 2 second delay for demo purposes
    const data = await sql<MoodEntryType>`SELECT * FROM mood_entries ORDER BY created_at DESC LIMIT 1`;
    
    if (data.rows.length === 0) {
      return null;
    }

    return data.rows[0];
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch today\'s mood.');
  }
}